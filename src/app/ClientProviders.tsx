"use client";
import { AppStore, makeStore } from "@/store/store";
import { Provider } from "react-redux"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useRef } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }
    return (
        <ConvexProvider client={convex}>
            <Provider store={storeRef.current}>
                {children}
            </Provider>
        </ConvexProvider>)
}

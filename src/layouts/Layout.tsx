import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import MyModal from "../components/MyModal"
import { useAppStore } from "../stores/useAppStore"

export const Layout = () => {

    const loadFromStorage = useAppStore((state) => state.loadFromStorage)
    const notification = useAppStore((state) => state.notification)

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (

        <>
            <Header />

            <main className="container mx-auto py-16">
                <Outlet />
            </main>

            <MyModal />

        </>

    )
}



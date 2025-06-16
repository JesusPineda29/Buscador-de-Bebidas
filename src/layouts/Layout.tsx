import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import MyModal from "../components/MyModal"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"
import { Footer } from "../components/Footer"

export const Layout = () => {

    const loadFromStorage = useAppStore((state) => state.loadFromStorage)

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (

        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="container mx-auto py-16 flex-1">
                <Outlet />
            </main>

            <MyModal />
            <Notification />


            <Footer />
        </div>

    )
}



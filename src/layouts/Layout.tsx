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

        <>
            <Header />

            <main className="container mx-auto py-16">
                <Outlet />
            </main>

            <MyModal />
            <Notification />


            <Footer />
        </>

    )
}



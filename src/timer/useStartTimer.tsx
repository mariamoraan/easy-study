import { useEffect } from "react"
import { globalTimer } from "./timer"

export const useStartTimer = () => {
    useEffect(() => {
        const timerInterval = setInterval(() => {
            globalTimer.notify()
        }, 1000)
        return () => clearInterval(timerInterval);
    }, [])
}
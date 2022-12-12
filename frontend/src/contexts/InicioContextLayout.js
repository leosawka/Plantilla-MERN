import { Outlet } from 'react-router-dom'
import { InicioProvider } from './InicioContext'

export default function InicioContextLayout() {
    <InicioProvider>
        <Outlet />
    </InicioProvider>
}
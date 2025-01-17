//import Image from 'next/image';
import { FloatingDock } from '../components/ui/floating-dock';
import { RegolamentoIcon, LoginIcon, SquadreIcon, CompetizioneIcon, AlbodOroIcon } from '../components/icons';
import '../styles/global.css';

export default function Home() {
    return (
        <div style={{
            height: '100vh', 
            width: '100vw', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative',
            backgroundImage: 'url("/menu-background.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }}>
            <div style={{
                flex: 1,
                padding: `0 ${20}vw`,
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/*<div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        src="/logo-lega-scarponi.png"
                        width={1000}
                        height={1000}
                        alt="Logo Lega Scarponi"
                        layout="instrinsic"
                        objectFit="cover"
                    />
                </div>*/}
            </div>
            <div style={{
                flex: 2,
                height: '100vh',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                zIndex: 1,
            }}>
                <FloatingDock items={[
                    { title: "REGOLAMENTO", icon: <RegolamentoIcon />, href: "/regolamento" }, 
                    { title: "LOGIN", icon: <LoginIcon />, href: "/login" }, 
                    { title: "SQUADRE", icon: <SquadreIcon />, href: "/regolamento" }, 
                    { title: "COMPETIZIONE", icon: <CompetizioneIcon />, href: "/regolamento" }, 
                    { title: "ALBO D'ORO", icon: <AlbodOroIcon />, href: "/regolamento" },
                ]}
                desktopClassName="menu-desktop"
                />
            </div>
        </div>
    );
}

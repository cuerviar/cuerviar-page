import Command from '../../components/Command'

export default function App() {

    const google = "cd ~/Downloads\n\nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n\nsudo dpkg -i google-chrome-stable_current_amd64.deb\n\nrm /google-chrome-stable_current_amd64.deb"
    const git = 'sudo apt install git\n\ngit config --global init.defaultBranch master\n\ngit config --global user.email "cuerviar"\n\ngit config --global user.name "cuerviar"'

    return <>
        <h1 style={{ textAlign: 'center' }}>Fedy OS</h1>
        <h2>Descarga</h2>
        <h2>USB Booteable</h2>
        <Command text={'cd ~/Downloads\n\nxz -d FydeOS*.xz\n\nlsblk\n\nsudo dd if=~/Downloads/FydeOS_for_PC_v19.0-io-stable.img of=/dev/sdb bs=4M status=progress conv=fsync\n\nsync'} />
        <h2>Instalacion</h2>
        <h2>Programas</h2>
    </>
}
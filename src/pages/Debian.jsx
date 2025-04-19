import Command from './../components/Command'

export default function App() {

    const google = "cd ~/Downloads\n\nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n\nsudo dpkg -i google-chrome-stable_current_amd64.deb\n\nsudo apt update\n\nsudo apt --fix-broken install\n\nsudo dpkg -i google*.deb\n\nrm google*.deb"

    return <>
        <h1 style={{ textAlign: 'center' }}>Debian</h1>
        <h2>Instalacion</h2>
        <h2>Programas</h2>
        <h3>KDE Plasma</h3>
        <a href='https://wiki.debian.org/KDE' target='_blank'>https://wiki.debian.org/KDE</a>
        <h3>Google Chrome</h3>
        <Command text={google} />
        <h3>Git</h3>
        <Command text={'sudo apt install git\n\ngit config --global init.defaultBranch master\n\ngit config --global user.email "cuerviar"\n\ngit config --global user.name "cuerviar"'} />
        Ahora la configuracion la usarlo con github
        <Command text={'ssh-keygen id_rsa\n\neval "$(ssh-agent -s)"\n\nssh-add ~/id_rsa\n\ncat id_rsa.pub\n\nssh -T git@github.com'} />
        <h3>Docker</h3>
        <a href='https://www.docker.com/' target='_blank'>https://www.docker.com/</a>
        <a href='https://docs.docker.com/engine/install/debian/' target='_blank'>https://docs.docker.com/engine/install/debian/</a>
        <Command text={'sudo apt-get update\n\nsudo apt-get install ca-certificates curl\n\nsudo install -m 0755 -d /etc/apt/keyrings\n\nsudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc\n\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt update\n\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n\nsudo usermod -aG docker $USER'} />
        <p>reiniciar el sistema operativo</p>
        <h3>Visual Studio Code</h3>
        <a href='https://code.visualstudio.com/' target='_blank'>https://code.visualstudio.com/</a>
        <Command text={'cd ~/Downloads\n\nsudo dpkg -i code*.deb'} />
        <h3>Steam</h3>
        <a href='https://store.steampowered.com/about/' target='_blank'>https://store.steampowered.com/about/</a>
        <Command text={'cd ~/Downloads\n\nsudo dpkg -i steam_latest.deb\n\nrm steam*.deb'} />
        <br></br>
        <br></br>
        <Command text={'xrandr\n\ncvt 1360 768 60\n\nxrandr --newmode "1360x768_60.00" 84.75  1366 1431 1567 1776  768 771 781 798 -hsync +vsync\n\nxrandr --addmode VGA-1 "1360x768_60.00"\n\nxrandr --output VGA-1 --mode "1360x768_60.00"'} />
        <br></br>
        <br></br>
        <Command text={'nano ~/.xprofile\n\nchmod +x ~/.xprofile\n\nxrandr --newmode "1360x768_60.00" 84.75  1366 1431 1567 1776  768 771 781 798 -hsync +vsync\nxrandr --addmode VGA-1 "1360x768_60.00"\nxrandr --output VGA-1 --mode "1360x768_60.00"'} />
    </>
}
import Command from './../components/Command'

/*

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo dpkg -i google***

sudo apt install git
git config --global init.defaultBranch master
git config --global user.email "cuerviar"
git config --global user.name "cuerviar"

*/
export default function App() {
    return <>
        <Command text={'sudo apt install steam'} />
    </>
}
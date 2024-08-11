//import { tryConnection } from "./connection"
import { userId } from "./main"
export const accountConnect = () => {
    console.log("début " + userId.mainId)
    let connectionZone = document.createElement("div")
        connectionZone.className = "connectionZone"
        connectionZone.style.position = "absolute"
        connectionZone.style.top = "8vh"
        connectionZone.style.left = "5vw"
        connectionZone.style.width = "60vw"
        connectionZone.style.height = "12vh"
        connectionZone.style.display = "flex"
        connectionZone.style.flexWrap = "wrap"
        connectionZone.style.alignContent = "center"
        connectionZone.style.gap = "20px"
        connectionZone.style.backgroundColor = "rgb(220,220,220)"
        connectionZone.innerHTML = "<input type='text' placeholder='Votre Nom' class='nom'><input type='texte' placeholder='Votre Mot de Passe' class='mdp'><button class='connectBtn'>OK</button>"
    const productsZone = document.querySelector("#products");
    //if connected = false
    productsZone.appendChild(connectionZone)
    let closeIt = document.createElement("div")
        closeIt.style.position ="absolute"
        closeIt.style.right = "10px"
        closeIt.innerText = "X"
    connectionZone.appendChild(closeIt)

    closeIt.addEventListener('click', () => {
        connectionZone.remove()
    })

    let connectBtn = document.querySelector('.connectBtn')
    let name = document.querySelector('.nom')
    let password = document.querySelector('.mdp')

    connectBtn.addEventListener('click', () => {
        name = document.querySelector('.nom').value
        password = document.querySelector('.mdp').value
        let unLock = false
        let mainId = ""
        const tryConnection = (a, b) => {
            let connectionZone = document.querySelector(".connectionZone")
            console.log("---Try connection---");
            const promise = new Promise((success, reject) => {
                let lock = [{name: "a", id: "1", password: "1"},
                    {name: "b", id: "2", password: "2"},
                    {name: "c", id: "3", password: "3"}]
                lock.map((user)=>{
                    if(user.name===a && user.password===b){
                        console.log("UNLOCK")
                        unLock = true
                        connectionZone.remove()
                        //console.log("--" + user.id);
                        userId.mainId = user.id
                    }
                })
                if(unLock){
                    success(mainId);
                }else{
                    reject('Promesse rompue' + unLock + "kjhekeohj");
                }
            })
            
            promise
                .then((msg)=>{mainId = msg})
                .catch((err) => {
                    console.error(err);
                })
            
        }
    tryConnection(name, password)
    console.log("fin " + userId.mainId);
    })
}


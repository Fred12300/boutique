let lock = [{name: "a", id: "1", password: "1"},
            {name: "b", id: "2", password: "2"},
            {name: "c", id: "3", password: "3"}]
let unLock = false
let mainId = ""
export const tryConnection = (name, password) => {
    let connectionZone = document.querySelector(".connectionZone")
    console.log("---Try connection---");
    const promise = new Promise((success, reject) => {
        lock.map((user)=>{
            if(user.name===name && user.password===password){
                console.log("UNLOCK")
                unLock = true
                connectionZone.remove()
                //console.log("--" + user.id);
                mainId = user.id
            }
        })
        if(unLock){
            success(mainId);
        }else{
            reject('Promesse rompue');
        }
    })
    
    promise
        .then((msg)=>{return msg})
        .catch((err) => {
            console.error(err);
        })
    

}
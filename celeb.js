import { dbConnect } from "./fsconnect.js"

export function getAllCeleb(req, res) {
  const db = dbConnect()
  db.collection("celebrities")
    .get()
    .then((collection) => {
      const celebs = collection.docs.map((doc) => doc.data())
      res.send(celebs)
    })
    .catch((err) => console.log(err))
}


export function setCeleb(req, res) {
  const { id } = req.params
  const newCeleb = req.body
  const db = dbConnect()
  db.collection("celebrities")
    .doc(id)
    .set(newCeleb)
    .then((doc)=>{
        res.send({
            seccess: true,
            message: `document ${doc.id} secessfully created`
        })
    })
    .catch((err) => console.log(err))
}

export function updateCeleb(req, res) {
  const { id } = req.params
  const newInfo = req.body
  if (!id) {
    res.status(401).send("invaild request")
  } else {
    const db = dbConnect()
    db.collection("celebrities")
      .doc(id)
      .update(newInfo)
      .then((doc) => {
        res.send({
          success: true,
          message: `document ${doc.id} sucessfully updated`,
        })
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }
}

const express = require('express')
const app = express()
const championnats = require('./public/bdd.json')

const MongoClient = require('mongodb').MongoClient;
const url = 'http://mongodb://localhost:27017';
const dbName = 'footdatabase';

let db 

MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    db = client.db(dbName);
  });


// Middleware
app.use(express.json())

app.get('/championnats', (req,res) => {
   res.status(200).json(championnats)
})

app.get('/championnats', async (req,res) => {
    try {
        const docs = await db.collection('foot').find({}).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.get('/championnats/:nomChampionnat', (req,res) => {
    const nomChampionnat = (req.params.nomChampionnat)
    const championnat = championnats.find(championnat => championnat.nomChampionnat === nomChampionnat)
    res.status(200).json(championnat)
})

app.get('/championnats/:nomChampionnat', async (req,res) => {
    const nomChampionnat = (req.params.nomChampionnat)
    try {
       const docs = await db.collection('foot').findOne({nomChampionnat})
       res.status(200).json(docs)
    } catch (err) {
      console.log(err)
      throw err
    }
})

app.post('/championnats/', (req,res) => {
    championnats.push(req.body)
    res.status(200).json(championnats)
})

app.post('/championnats', async (req,res) => {
    try {
        const championnatData = req.body
        const championnat = await db.collection('foot').insertOne(championnatData)
        res.status(200).json(championnat)
    } catch (err) {
        console.log(err)
        throw err
    }
    
})

app.put('/championnats/:nomChampionnat', (req,res) => {
    const nomChampionnat = (req.params.nomChampionnat)
    let championnat = championnats.find(championnat => championnat.nomChampionnat === nomChampionnat)
    championnat.nomChampionnat =req.body.nomChampionnat,
    championnat.pourcentageFrancais =req.body.pourcentageFrancais,
    championnat.nombreSpectateurs =req.body.nombreSpectateurs,
    res.status(200).json(championnat)
})

app.put('/championnats/:nomChampionnat', async (req,res) => {
    try {
        const nomChampionnat = (req.params.nomChampionnat)
        const replacementChampionnat = req.body
        const championnat = await db.collection('championnats').replaceOne({nomChampionnat},replacementChampionnat)
        res.status(200).json(championnat)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.delete('/championnats/:nomChampionnat', (req,res) => {
    const nomChampionnat = (req.params.nomChampionnat)
    let championnat = championnats.find(championnat => championnat.nomChampionnat === nomChampionnat)
    championnats.splice(championnats.indexOf(championnat),1)
    res.status(200).json(championnat)
})

app.delete('/championnats/:nomChampionnat', async (req,res) => {
    try {
        const nomChampionnat = (req.params.nomChampionnat)
        const championnat = await db.collection('championnats').deleteOne({nomChampionnat})
        res.status(200).json(championnat)
    } catch (err) {
        console.log(err)
        throw err
    } 
})


app.listen(8080, () => {
    console.log('Serveur à lécoute')
  })
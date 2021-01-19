import { Router, Request, Response } from 'express'
import { readFile } from 'fs'
import fetch from 'node-fetch'

export const repos = Router()

let allRepos = []

repos.use(function (req, res, next) {
  readFile('./data/repos.json', (err, data) => {
    if (!err) {
      allRepos = JSON.parse(data)
    }
  })
  next()
})

repos.use(async function (req, res, next) {
  try {
    let response = await fetch(
      'https://api.github.com/users/silverorange/repos'
    )
    let fetchedRepos = await response.json()
    allRepos = [...allRepos, ...fetchedRepos]
  } catch (err) {
    //
  }
  next()
})

repos.get('/', (_: Request, res: Response) => {
  res.header({
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json'
  })
  if (allRepos.length > 0) {
    allRepos = allRepos.filter(repo => repo.fork === false)
  }

  res.status(200)

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(allRepos)
})

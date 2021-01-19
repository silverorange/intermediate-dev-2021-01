import { Router, Request, Response } from 'express';
import { readFile } from 'fs';

export const repos = Router();

let allRepos = [];

repos.use(function(req,res,next){
  readFile('./data/repos.json', (err, data) => {
    if (!err) {
      allRepos = JSON.parse(data);
    }
  })
  next();
})

repos.get('/', async (_: Request, res: Response) => {
  res.header({'Cache-Control':'no-store','Content-Type':'application/json'})
  if (allRepos.length > 0) {
    allRepos = allRepos.filter(repo => repo.fork===false);
  }

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(allRepos);
});

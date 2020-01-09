import * as knex from 'knex';
import {alaSqlConfig} from "./alasql.config"

import {TaskService} from "../src/services/TasksService";


describe('TaskService => create', () => {
    let taskService = new TaskService(knex(alaSqlConfig))
    it('tests create method', async () => {
        taskService.create({
            "subject":"test subject",
            "rate": 100
        }).then(task =>{
            expect(task).toEqual({
                "id":1,
                "subject":"test subject1",
                "rate": 100
            })
        }).catch(e => e)
      })


      it('tests get method', async () => {
        taskService.create({
            "subject":"test subject2",
            "rate": 20
        }).then(createdTask =>{
            taskService.getRatedLastTask().then(ratedTask =>{
                expect(ratedTask).toEqual({
                    "id":1,
                    "subject":"test subject1",
                    "rate": 100
                })
            }).catch(e => console.log(e))
        }).catch(e => e)
        
      })

      
      it('tests delete method', async () => {
        taskService.deleteTask().then(deleteResult =>[

            expect(deleteResult).toEqual({})
        ]).catch(e => e)

      })


  })
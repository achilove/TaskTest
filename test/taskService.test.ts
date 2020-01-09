let client = require('knex-alasql');
import {TaskService} from "../src/services/TasksService";


describe('TaskService => create', () => {
    let config = {
 
        client: client,
     
        // Optional properties with default values
        name: 'knex_database',
        version: '1.0',
        displayName: 'knex_database', // inherited from 'name'
        estimatedSize: 5 * 1024 * 1024, // 5MB
     
        // AlaSQL specific options https://github.com/agershun/alasql/wiki/AlaSQL%20Options
        options: {
            mysql: true
        }
    };
    let taskService = new TaskService(config)
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
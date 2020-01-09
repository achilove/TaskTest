import { CreateTaskDto } from "../dto/CreateTask.dto";
import {Exception} from "ts-httpexceptions";
import * as knex from 'knex';
import { Config } from 'knex';

export class TaskService {
  private connector: knex;

  constructor(private config: Config) {
    this.connector = knex(config)

  }

  async create(task: CreateTaskDto) {
    let createdTask = await this.connector.table('task').insert(task).returning('*')
    if(createdTask[0]){
      return createdTask[0]
    }else{
      throw new Exception(500, "Cannot create task")
    }
  }

  async getRatedLastTask() {
    let task = await this.connector.table('task').select("*").orderBy("rate" ,"desc").orderBy("id", "desc").limit(1)

    if(!task[0]){
      throw new Exception(404, "There is no task in the list")
    }
    return task
  }

  async deleteTask() {
    let deleteTaskQuery = "DELETE FROM task WHERE ctid IN ( SELECT ctid FROM task order by rate desc, id desc limit 1 )"
    let deleteResponse = await this.connector.raw(deleteTaskQuery)   
    if(deleteResponse.rowCount){
      return {}
    }else{
      throw new Exception(404, "Nothing to delete")
    }
  }

}

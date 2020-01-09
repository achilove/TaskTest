import {BodyParams, Controller, Get, Post, Delete, UseAfter} from "@tsed/common";
import {TaskService} from "../../services/TasksService";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import { SucessResponseEndpointMiddleware } from "../../middlewares/task.middleware";
import * as knex from 'knex';
import * as config from "../../../knexfile" 

@Controller("/tasks")

export class TaskCtl {
  private taskService: TaskService
  constructor() {
    this.taskService = new TaskService(knex(config))
  }

  @Post("/")
  @UseAfter(SucessResponseEndpointMiddleware)
  createTask(@BodyParams() task: CreateTaskDto){
    return this.taskService.create(task);
  }

  @Get("/")
  @UseAfter(SucessResponseEndpointMiddleware)
  async getTask() {
    return this.taskService.getRatedLastTask();
  }

  @Delete("/")
  @UseAfter(SucessResponseEndpointMiddleware)
  async deleteTask() {
    return this.taskService.deleteTask();
  }

}

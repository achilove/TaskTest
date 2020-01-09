import {BodyParams, Controller, Get, Post, Delete, UseAfter} from "@tsed/common";
import {TaskService} from "../../services/TasksService";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import { SucessResponseEndpointMiddleware } from "../../middlewares/task.middleware";

@Controller("/tasks")

export class TaskCtl {
  private taskService: TaskService
  constructor() {
    this.taskService = new TaskService({
      client: 'pg',
      connection: process.env.DATABASE_URL || 'postgres://task:jIuhlkVmdU@localhost:5432/task_db'
    })
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

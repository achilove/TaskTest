import {Required, MaxLength, MinLength, Minimum, Maximum } from "@tsed/common";
 
export class CreateTaskDto{
    
    @Required()
    @MinLength(1)
    @MaxLength(255)
    subject: string;
  
     
    @Minimum(0)
    @Maximum(100)
    @Required()
    rate: number;
  }
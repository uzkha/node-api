import {Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController{


    /**
     * http://localhost:3333/answers/7?u=0829f7e6-c0f2-4224-adc0-a6a11a38ceaf
     * Router params -> parametros que compoem a rota: exemplo:  /1
     *                  route.get("/asnwer/:value")
     * Query params -> busca, paginacao, nao obrigatorios
     * vem depois do ?  chave=valor, exemplo ?u=25656  
     * @param request 
     * 
     * @param response 
     */
    async execute(request: Request, response: Response){

        const {value} = request.params;
        const { u }   = request.query;

        const surveysUsersRespository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRespository.findOne({
            id: String(u)
        });

        if(!surveyUser){           
            throw new AppError("Survey User does not exists", 400);
        }

        surveyUser.value = Number(value);

        await surveysUsersRespository.save(surveyUser);

        return response.json(surveyUser);

    }
}
export {AnswerController}
import { Request, Response } from 'express';
import knex from '../database/connection';

class RespostasController{
    async show(req:Request, res:Response){
        const {pergunta_id} = req.params;


        const pergunta = await knex('pergunta').select('descricao').where('id',pergunta_id).first();
        
        const respostas = await knex('resposta')
            .join('pergunta','pergunta.id','=','resposta.pergunta_id')
            .join('mae','mae.id','=','resposta.mae_id')
            .select('resposta.mae_id','mae.nome as nome_mae','resposta.descricao as resposta')
            .where('resposta.pergunta_id',pergunta_id)

        return res.json({
            id:parseInt(pergunta_id),
            pergunta:pergunta.descricao,
            respostas
        })
    }
}

export default RespostasController;
import {Request, Response} from 'express'
import { User } from '../database/entities/user.entity'
import jwt from 'jsonwebtoken'
class Account{


    async register(req: Request, res: Response){

        var emailExist = await User.findOne({
            where: {email: req.body.email}
        });

        if(!emailExist){

            return res.json({error: "este correo ya se encuentra registrado."});
        }

        const result = await User.save(req.body);
        if(!result){
            return res.json({error: "ha ocurrido un error para registrarse."});
        }else{
            res.json(result)
        }

    }

    async login(req: Request, res:Response){

        var emailExist = await User.findOne({
            where: {email: req.body.email}
        });
        if(!emailExist){

            return res.json({error: "login fallido."});
        }

        const validPassword = emailExist.compare(req.body.password);

        if(!validPassword) return res.json({error: "login fallido."});


        var token = jwt.sign({id: emailExist.id, name: emailExist.name, email: emailExist.email}, "auth", {
            expiresIn: "1d"
        })

        return res.json(token);


    }


}

export default new Account;
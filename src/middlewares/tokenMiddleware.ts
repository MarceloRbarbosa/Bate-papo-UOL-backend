import { Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import { AuthenticatedRequest } from "../protocols/protocolTypes"

interface JwtPayload {
    userId: number;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const authHeader = req.headers["authorization"];
    
    if(!authHeader) throw { type: "unauthorized", message: "Token not provided"}
    
    const [scheme, token] = authHeader.split(' ')[1];
    if(scheme !== "Bearer" || !token) throw { type: "unauthorized", message: "Invalid Token format"}
   
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        
        req.userId = payload.userId;
        next();
    } catch (error) {
        throw { type: "unauthorized", message: "Token invalid or expired"}
    }
}
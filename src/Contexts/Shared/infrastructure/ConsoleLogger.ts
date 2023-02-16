import { Logger } from "../domain/Logger"
import fs from "fs"

export class ConsoleLogger implements Logger {

    private FILE_PATH = `${__dirname}/logs`

    async info(msg: string): Promise<void> {
        this.write("INFO : \n" + msg)
    }
    async warn(msg: string): Promise<void> {
        this.write("WARNING : \n" + msg)
    }
    async error(msg: string): Promise<void> {
        this.write("ERROR : \n" + msg)
    }

    private async write(msg: string) : Promise<void>  {
        fs.promises.writeFile(this.FILE_PATH, msg)
    }
}
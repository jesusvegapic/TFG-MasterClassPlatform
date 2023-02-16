export interface Logger  {
    info(msg : string) : Promise<void>
    warn(msg : string) : Promise<void>
    error(msg : string) : Promise<void>
}
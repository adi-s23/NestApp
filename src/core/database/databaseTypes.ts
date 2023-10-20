import { Temp } from "src/temp/temp.entity"
import { User } from "src/user/model/user.entity"

export type dBType = {
    Temp : typeof Temp
    User: typeof User
}
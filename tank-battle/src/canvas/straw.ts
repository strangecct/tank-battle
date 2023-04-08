import config from "../config"
import canvasAbstract from "./canvasAbstract"
import Straw from "../model/Straw"

class straw extends canvasAbstract implements ICanvas {
    num(): number {
        return config.straw.num
    }
    model(): ModelConstructor {
        return Straw
    }
    constructor() {
        super()
        super.createModels()
    }
    render(): void {
        super.renderModels();
    }

}

export default new straw()
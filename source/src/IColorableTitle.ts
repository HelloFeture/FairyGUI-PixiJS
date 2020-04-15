namespace fgui {

    /**
     * 文本颜色，见 
     * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
     */
    export type TextColor = string | string[] | number | number[] | CanvasGradient | CanvasPattern;
    
    export interface IColorableTitle {
        titleColor: TextColor;
        fontSize: number;
    }

    export let isColorableTitle = function(obj:any): obj is IColorableTitle
    {
        return obj && "titleColor" in obj && "fontSize" in obj;
    }
}
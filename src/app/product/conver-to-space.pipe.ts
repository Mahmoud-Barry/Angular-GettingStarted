import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacePipe implements PipeTransform{
    transform(value: string,chracter : string): string {
        return value.replace(chracter,' ')
    }


}
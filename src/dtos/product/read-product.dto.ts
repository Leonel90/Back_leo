import { BaseProductDto } from "./base-product.dto";
import { Exclude, Expose} from 'class-transformer'

@Exclude()
export class ReadProductDto extends BaseProductDto{
@Expose()
readonly id;

@Expose()
readonly @Expose()
readonly title;

@Expose()
readonly price;

@Expose()
readonly description;

@Expose()
readonly image;

}
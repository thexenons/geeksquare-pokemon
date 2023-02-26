import { Type } from "@/types/models";
import { capitalizeString } from "@/utils/string";

export const transformTypesToString = (types: Type[]) =>
	types.map((type) => capitalizeString(type.name)).join(", ");

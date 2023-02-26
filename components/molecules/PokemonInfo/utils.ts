import { Ability } from "@/types/models";
import { capitalizeString } from "@/utils/string";

export const transformAbilitiesToString = (abilities: Ability[]) =>
	abilities.map((ability) => capitalizeString(ability.name)).join(", ");

export class NumberUtils {
	public static format = (number: number, opts?: Intl.NumberFormatOptions, locale = 'it'): string => {
		return new Intl.NumberFormat(locale, opts).format(number);
	};
}

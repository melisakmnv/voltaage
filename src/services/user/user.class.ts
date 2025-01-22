export class User {
	email: string;
	name: string;
	surname: string;

	getAvatarLetters = () => (this.name && this.surname ? [this.name[0], this.surname[0]] : [this.email[0]]).join('').toUpperCase();
}

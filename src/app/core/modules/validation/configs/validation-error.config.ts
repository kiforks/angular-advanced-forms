export abstract class ValidationErrorConfig {
	public static messages: Record<string, (args?: any) => string> = {
		required: () => `This field is required`,
		requiredTrue: () => `This field is required`,
		email: () => `It should be a valid email`,
		minlength: ({ requiredLength }) => `The length should be at least ${requiredLength} characters`,
		banWords: ({ bannedWord }) => `The word "${bannedWord}" isn't allowed`,
		passwordShouldMatch: () => `Password should match`,
		pattern: () => `Wrong format`,
		uniqueName: () => `Nickname is taken`,
	};
}

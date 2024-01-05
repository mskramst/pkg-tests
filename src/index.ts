class PowerfulUtil {

	public name: string;

	constructor(name: string) {
		this.name = name;
		console.log("constructor created for the most powerful util");
	}

	doSomethingGreat() {
		console.log(`this is doing something great ${this.name}`);
	}
}

export default PowerfulUtil;

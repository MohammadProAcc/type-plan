// import { blogPosts } from "./../../../schemas/mod.ts";
// export const handleBlogPostPromotion = async (promotionNumber: number) => {
// 	if (
// 		!(await blogPosts.findOne({ promotion: promotionNumber })) ||
// 		!promotionNumber
// 	) {
// 		return;
// 	}
// 	await handleBlogPostPromotion(promotionNumber - 1);
// 	await blogPosts.updateOne(
// 		{ promotion: promotionNumber },
// 		{ $inc: { promotion: -1 } }
// 	);
// };

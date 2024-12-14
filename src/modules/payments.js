import createPayment from '../helpers/createPayment.js';

export default (bot) => {
    bot.callbackQuery('subscribe_10', async (ctx) => {
        const paymentLink = await createPayment(99, '10 запросов за 99 рублей')
        
        await ctx.reply(`Для оплаты перейдите по ссылке: ${paymentLink}`);
        await ctx.answerCallbackQuery();
    });

    bot.callbackQuery('subscribe_7', async (ctx) => {
        const paymentLink = await createPayment(199, 'Безлимит 7 дней');
        await ctx.reply(`Для оплаты перейдите по ссылке: ${paymentLink}`);
        await ctx.answerCallbackQuery();
    });

    bot.callbackQuery('subscribe_14', async (ctx) => {
        const paymentLink = await createPayment(299, 'Безлимит 14 дней');
        await ctx.reply(`Для оплаты перейдите по ссылке: ${paymentLink}`);
        await ctx.answerCallbackQuery();
    });

    bot.callbackQuery('subscribe_30', async (ctx) => {
        const paymentLink = await createPayment(399, 'Безлимит 30 дней');
        await ctx.reply(`Для оплаты перейдите по ссылке: ${paymentLink}`);
        await ctx.answerCallbackQuery();
    });
};

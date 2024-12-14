import { v4 as uuidv4 } from 'uuid';

const createPayment = async (amount, description) => {
    const shopId = process.env.SHOPID;
    const secretKey = process.env.SECRETKEY;
    
    const url = 'https://api.yookassa.ru/v3/payments';
    const body = {
        amount: {
            value: amount.toFixed(2),
            currency: 'RUB',
        },
        confirmation: {
            type: 'redirect',
            return_url: 'https://example.com/return-url',
        },
        description: description,
    };

    const idempotenceKey = uuidv4(); // Уникальный ключ идемпотентности

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${shopId}:${secretKey}`)}`,
                'Idempotence-Key': idempotenceKey,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Ошибка API ЮKassa:', errorData);
            throw new Error(`API error: ${errorData.description || 'Unknown error'}`);
        }

        const responseData = await response.json();
        return responseData.confirmation.confirmation_url;
    } catch (error) {
        console.error('Ошибка при создании платежа:', error.message);
        throw error;
    }
};

export default createPayment;

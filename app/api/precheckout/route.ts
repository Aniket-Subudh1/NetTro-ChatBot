import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();
  let rand = Math.floor(Math.random() * 10000000);

  var instance = new Razorpay({ 
    key_id: process.env.NEXT_PUBLIC_KEY_ID ||"", 
    key_secret: process.env.NEXT_PUBLIC_KEY_SECRET||"" 
  });

  var options = {
    amount: data.amount * 100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: `${rand}`
  };

  try {
    const order = await new Promise((resolve, reject) => {
      instance.orders.create(options, (err, order) => {
        if (err) {
          reject(err);
        } else {
          resolve(order);
        }
      });
    });

    return NextResponse.json({ order, success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
};

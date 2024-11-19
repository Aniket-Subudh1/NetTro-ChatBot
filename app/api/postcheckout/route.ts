import Razorpay from 'razorpay';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req:NextRequest) => {
  try {
    // Attempt to parse the incoming request body as JSON
    const contentType = req.headers.get('content-type') || '';
    let body;

    if (contentType.includes('application/json')) {
      body = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      throw new Error('Unsupported Content-Type');
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    const key_secret = process.env.NEXT_PUBLIC_KEY_SECRET||"";     

    // Creating hmac object and passing the data to be hashed
    const hmac = crypto.createHmac('sha256', key_secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        
    // Creating the hmac in the required format
    const generated_signature = hmac.digest('hex');
        
    if (razorpay_signature === generated_signature) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/confirm?id=${razorpay_order_id}?payment_id=${razorpay_payment_id}`, 302);
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error:any) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
};



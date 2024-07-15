import React, { useState } from "react";

const CheckoutForm: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("creditCard");
  const orderItems = [
    {
      id: 1,
      name: "Basic Tee",
      color: "Black",
      size: "Large",
      price: 32.0,
      imageUrl: "https://via.placeholder.com/50",
      quantity: 1,
    },
    {
      id: 2,
      name: "Basic Tee",
      color: "Sienna",
      size: "Large",
      price: 32.0,
      imageUrl: "https://via.placeholder.com/50",
      quantity: 1,
    },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = orderItems.length > 0 ? 5.0 : 0;
  const taxes = orderItems.length > 0 ? 5.52 : 0;
  const total = subtotal + shipping + taxes;

  return (
    <div className="container mx-auto p-6">
      <a href="/">
        <h1 className="text-4xl font-bold text-center mb-8 px-2">EARLYBIRD</h1>
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information and Shipping Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <h2 className="text-2xl font-semibold mb-6">CONTACT</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email address"
              />
            </div>
            <hr className="py-3" />

            <h2 className="text-2xl font-semibold mb-6">
              SHIPPING INFORMATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apartment"
              >
                Apartment, suite, etc.
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apartment"
                type="text"
                placeholder="Apartment, suite, etc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                >
                  <option>Germany</option>
                  <option>Ireland</option>
                  <option>Spain</option>
                  <option>France</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="state"
                >
                  State / Province
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state"
                  type="text"
                  placeholder="State / Province"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="postalCode"
                >
                  Postal code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="postalCode"
                  type="text"
                  placeholder="Postal code"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Phone"
              />
            </div>
          </form>
          <hr className="py-3" />
          <h2 className="text-2xl font-semibold mb-6">PAYMENT METHOD</h2>
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={selectedPaymentMethod === "creditCard"}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="creditCard" className="font-semibold">
                Credit card
              </label>
              <div className="ml-auto flex space-x-2">
                <img src="/visa.svg" alt="Visa" className="w-8 h-8" />
                <img
                  src="/mastercard.svg"
                  alt="Mastercard"
                  className="w-8 h-8"
                />
                <img src="/amex.svg" alt="Amex" className="w-8 h-8" />
              </div>
            </div>
            {selectedPaymentMethod === "creditCard" && (
              <div className="grid grid-cols-1 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <div className="flex items-center">
                  <input type="checkbox" id="sameAddress" className="mr-2" />
                  <label htmlFor="sameAddress">
                    Use delivery address as billing address
                  </label>
                </div>
              </div>
            )}
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="applePay"
                name="paymentMethod"
                value="applePay"
                checked={selectedPaymentMethod === "applePay"}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="applePay" className="font-semibold">
                Apple Pay
              </label>
              <div className="ml-auto">
                <img src="/applepay.svg" alt="Apple Pay" className="w-8 h-8" />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={selectedPaymentMethod === "paypal"}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="paypal" className="font-semibold">
                PayPal
              </label>
              <div className="ml-auto">
                <img src="/paypal.svg" alt="PayPal" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Order summary</h2>
          {orderItems.length === 0 ? (
            <p className="text-gray-700">Your cart is empty</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt="Product"
                      className="w-12 h-12 object-cover rounded mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-700">
                        {item.color} - {item.size}
                      </p>
                      <p className="text-gray-700">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{item.quantity}</span>
                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Taxes</span>
                <span className="font-semibold">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-xl mt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
          <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

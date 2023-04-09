const UserFooter = () => {
  return <>
    <footer aria-label="Site Footer" className="bg-white lg:grid lg:grid-cols-5 my-10">

      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="thumb1_800x450_800x450.jpg"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">
                Số Điện Thoại
              </span>

              <a
                href="#"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Tìm cửa hàng</li>
              <li>Mua hàng từ xa</li>
              <li>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</li>
              <li>Phương thức thanh toán</li>
            </ul>

            <ul className="flex gap-6 mt-8">
              <li>
                <img src="/Rectangle (1).png" alt="" />
              </li>
              <li>
                <img src="/Rectangle (2).png" alt="" />
              </li><li>
                <img src="/Rectangle (3).png" alt="" />
              </li><li>
                <img src="/Rectangle.png" alt="" />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Đối tác dịch vụ bảo hành</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Diện Thoại - Máy Tính
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Gọi mua hàng : 1800.2063 (8h00 - 22h00)
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Gọi khiếu nại : 1800.2044 (8h00 - 21h30)
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Gọi bảo hành : 1800.2064 (8h00 - 21h00)
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="font-medium text-gray-900 my-3">Trung Tâm bảo hành</p>
              <img src="/Rectangle (4).png" alt="" />
            </div>

            <div>
              <p className="font-medium text-gray-900">Tra cứu</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Mua hàng và thanh toán Online
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Mua hàng trả góp Online
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Tra thông tin đơn hàng
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Tra điểm Smember
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Tra thông tin bảo hành
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Tra cứu hoá đơn VAT điện tử
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Trung tâm bảo hành chính hãng
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Quy định về việc sao lưu dữ liệu
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Dịch vụ bảo hành điện thoại
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-100">
          <div className="sm:flex sm:items-center sm:justify-between">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default UserFooter
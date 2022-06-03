import Link from "next/link";
import React from "react";
import * as mediumLogo from "../assets/mediumLogo.png";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://ucbd382d867eda2285bc3724c2e9.previews.dropboxusercontent.com/p/thumb/ABiegShg3uPLnKqWbriOy154tKuQX3qSjBMvNQQ5K-GjYapD8HNuFH_eHa5RyMIsQOPm_Dp8tcatgaXIEe3DLBqVrQLdbPmii0eTWqbzmxwbUX5Hjev2MyqeqSKTI9g-iqjVIA_-boKL8gJ7EFFeyZ0XQfyTwx4LQUEQPbAtkFlWt6j6s1wmQaKEJi5j7WIGN9TOFLsJ4gxo2t5C_OT5sicVrKR_xoB249IHOpN_UYK0Pjn8wzABAKxIH9OavFYZ93dgg5JQBziatRvy6cHCOw9KzZlPV3Sx3HBeLA2-dBDqR7pyCWMxBN1H8G4K5PVQYFJwi8aLXF4iuAtMegFXlMr8vSPGmeEVXDmMn9ycKqDbz4xYsslny9oScYTzbAlKM80CR5HiSHODr-ksRAXLx6kIOYBTHQosYUr-jPgzMQ1v099FdRGHsuP0tXus02OgvWIFzw1YwHtj0eIcjorWC5QdWSP27KTezoxIRMgYTPOexhDW3N7n15pbI0Cn9XsdB7p1XE0iazpQ3nsUV6u2fUzK20BKCpp2Ctj6IWk7RNdfABj0hbIvnJvfMcvkMOZhR3prapEtj_-rdMOFye2xPKl3wpJsmE8GdgtKu6lBUvVSqfSzSeAyZ4EzcgZQBZYz76r9jBzFu9YKnqvcpbMywmSMWy1saI-TMI3A4GXzje9JthgRNbTxSgSTRjDsoHr5DziISrnQQex-oE1QhzrSwFhDzAuQ65EQAYUJj15cdiKEQXfOCHs4IrY8p8a5x6mUUVDo_jbv7yUZoZKGzwzo3mAhKXFFh_bBM8vynAU1OhuojJsRSkjGbSN10hwDk2_82mNhoVeY6-GUjb6s-nUj9crH2cqDRpFqEZTwZNJwYpBAKXnz5s2wLF1XlTWQtWSiNFhdQP8BPF-Hs6rrHdiVBabvfSLzKJiqaiyDhrX-b4PHywL_Jr4h8sYltFFT--xkkltfwtZka2tjf0h0Dlim4wxPRRtM2atL5VbVBS68jJhToghe8_mR0G3INmhDch2y-FLt8-ASVwzX4OVVcwldWFRt_IblekVZ0vhjj2cY9dTW_FE8bqVGnP6URGaxN3r-P_57VWyPYkg0-olEgakWE3S9WN0tysw-c5J_-GLoMlZeWe3-gSOop7FjP4z1ecPw5nO4Q4ft9c710n0e8_2ddPnhf3czvF_Od0U71jkz00Dr4bFGekQVyQV_xjD_L3YijTEzkJqEKW1B8FXrJ9d8I6bqCW8c2GpmH8A0PDa7nhGtlA/p.png"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 ">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;

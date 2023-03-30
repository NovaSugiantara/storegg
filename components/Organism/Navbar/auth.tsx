import Link from "next/link";
import React from "react";

interface AuthProps {
  is_login?: boolean;
}
export default function Auth(props: Partial<AuthProps>) {
  const { is_login } = props;
  if (is_login) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="/img/avatar-1.png"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a
                className="dropdown-item text-lg color-palette-2"
                href="/profile"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-lg color-palette-2"
                href="/wallet"
              >
                Wallet
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-lg color-palette-2"
                href="/settings"
              >
                Account Settings
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-lg color-palette-2"
                href="/sign_out"
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign_ins">
        <button
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </button>
      </Link>
    </li>
  );
}

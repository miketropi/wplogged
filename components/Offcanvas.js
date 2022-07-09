import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { useAppContext } from "../context/state";

const OffvanvasContainer = styled.div`

  .offcanvas-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    overflow: auto;
    width: 100%;
    height: 100%;
    background: #32304ca1;
    transition: .3 ease;
    visibility: hidden;
    opacity: 0;

    .offcanvas-container__inner {
      position: absolute;
      right: 0;
      top: 0;
      width: 320px;
      max-width: calc(100% - 30px);
      background: white;
      min-height: 100%;
      transition: .3s ease;
      transform: translateX(100%);
      opacity: 0;
    }

    &.__is-open {
      visibility: visible;
      opacity: 1;

      .offcanvas-container__inner {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;

const ButtonClose = styled.button`
  background: #000;
  border: none;
  border-radius: 0;
  width: 100%;
  color: white;
  height: 54px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 11px;
  font-weight: bold;
`;

const NavMobileWrapper = styled.div`
  padding: 32px 16px;
`;

export default function Offcanvas({ open, onClose }) {
  const { isMobile } = useAppContext();

  return isMobile && <OffvanvasContainer> 
    <div className={ [`offcanvas-container`, `__is-${ open ? 'open' : 'close' }`].join(' ') }>
      <div className="offcanvas-container__inner">
        <ButtonClose onClick={ onClose }>Close</ButtonClose>
        <NavMobileWrapper>
          <Nav menuStyle={ 'vertical' } />
        </NavMobileWrapper>
      </div>
    </div>
  </OffvanvasContainer>
}
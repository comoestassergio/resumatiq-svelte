import { writable } from "svelte/store";

class RedirectModalController {
  public p_isModalOpen = writable(false);

  public get isOpen() {
    return this.p_isModalOpen;
  }

  public showModal() {
    this.p_isModalOpen.update(() => true);
    return this.p_isModalOpen;
  }

  public closeModal() {
    this.p_isModalOpen.update(() => false);
    return this.p_isModalOpen;
  }
}

export function useRedirectModalCtrl() {
  return new RedirectModalController();
};


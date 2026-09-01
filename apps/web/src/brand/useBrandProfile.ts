export function useBrandProfile(brandRepository: any, organizationId: string) {
  async function load() {
    return brandRepository.getBrandProfile(organizationId);
  }

  async function save(profile: any) {
    return brandRepository.saveBrandProfile(profile);
  }

  return {
    load,
    save,
  };
}

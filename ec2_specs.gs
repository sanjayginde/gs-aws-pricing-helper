
/**
 * Get number of vCPUs in the specified instance type (if available in this region).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_SPEC_VCPU(type, region) {
  return get_ec2_specs(type, region, "vCPU", "https://a0.awsstatic.com/pricing/1/ec2/linux-od.min.js");
}

/**
 * Get the amount of installed memory in the specified instance type (if available in this region).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_SPEC_RAM(type, region) {
  return get_ec2_specs(type, region, "memoryGiB", "https://a0.awsstatic.com/pricing/1/ec2/linux-od.min.js");
}

/**
 * Get performance (ECU) of the specified instance type (if available in this region).
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_SPEC_ECU(type, region) {
  return get_ec2_specs(type, region, "ECU", "https://a0.awsstatic.com/pricing/1/ec2/linux-od.min.js");
}

/**
 * Get the amount of local storage in the specified instance type (if available in this region). Returns "ebsonly" if none is provided.
 *
 * @param {type} Instance type
 * @param {region} Region(optional)
 * @customfunction
 */
function EC2_SPEC_STORAGE(type, region) {
  return get_ec2_specs(type, region, "storageGB", "https://a0.awsstatic.com/pricing/1/ec2/linux-od.min.js");
}
